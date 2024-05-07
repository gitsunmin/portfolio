'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';
import { match } from 'ts-pattern';
import { ignore } from '@/lib/functions';

const TagItem = ({
  children,
  focus,
  onClick,
  onHover,
}: {
  children: React.ReactNode;
  focus: boolean;
  onClick?: () => void;
  onHover?: () => void;
}) => {
  return (
    <li>
      <Button
        variant={'outline'}
        className={`p-2 w-full rounded-none hover:text-accent-foreground flex justify-start items-center ${
          focus ? 'bg-accent' : ''
        }`}
        onClick={onClick}
        onMouseOver={onHover}
      >
        {children}
      </Button>
    </li>
  );
};

type Props = {
  availableTags: string[];
  selectedTags: string[];
  onSelect: (tag: string) => void;
  onRemove: (tag: string) => void;
};

export const TagSearch: React.FC<Props> = ({
  availableTags,
  selectedTags,
  onSelect,
  onRemove,
}) => {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(0);
  const listRef = useRef<HTMLUListElement>(null);

  const filteredTags = availableTags.filter((tag) =>
    tag.toLowerCase().includes(query.toLowerCase())
  );

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setOpen(true);
  };

  const selectTag = (tag: string) => {
    addTag(tag);
    setFocusedIndex(0);
    setOpen(false);
    setQuery('');
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    match(e.key)
      .with('ArrowDown', () => {
        setFocusedIndex((index) =>
          Math.min(index + 1, filteredTags.length - 1)
        );
        setOpen(true);
      })
      .with('ArrowUp', () => {
        setFocusedIndex((index) => Math.max(index - 1, 0));
        setOpen(true);
      })
      .with('Enter', () => {
        selectTag(filteredTags[focusedIndex]);
      })
      .otherwise(ignore);
  };

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      onSelect(tag);
    }
    setQuery('');
  };

  useEffect(() => {
    if (listRef.current && focusedIndex !== -1) {
      const selectedItem = listRef.current.childNodes[focusedIndex];
      (selectedItem as Element).scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [focusedIndex]);

  return (
    <div className="w-96 p-4">
      <Popover open>
        <PopoverTrigger className="w-full">
          <Input
            placeholder="기술 스택을 입력해주세요."
            value={query}
            onChange={onChange}
            onKeyDown={onKeyDown}
            onFocus={() => setOpen(true)}
            onBlur={() => setTimeout(() => setOpen(false), 200)}
          />
        </PopoverTrigger>
        <PopoverContent
          className={`${
            open ? '' : 'hidden'
          } w-80 lg:w-96 border-0 p-0 lg:px-4 bg-transparent`}
        >
          <ScrollArea className="h-[200px] rounded-md">
            <ul ref={listRef}>
              {filteredTags.map((tag, index) => (
                <TagItem
                  focus={index === focusedIndex}
                  key={tag}
                  onClick={() => selectTag(tag)}
                  onHover={() => setFocusedIndex(index)}
                >
                  {tag}
                </TagItem>
              ))}
            </ul>
          </ScrollArea>
        </PopoverContent>
      </Popover>
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedTags.map((tag) => (
          <Badge key={tag} variant="outline" className="felx gap-[8px]">
            {tag}
            <button className="text-white" onClick={() => onRemove(tag)}>
              <Cross1Icon />
            </button>
          </Badge>
        ))}
      </div>
    </div>
  );
};
