import React, { useState } from 'react';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';
import { Cross1Icon } from '@radix-ui/react-icons';
import { Badge } from '@/components/ui/badge';

type TagSearchProps = {
  availableTags: string[];
  selectedTags: string[];
  onSelect: (tag: string) => void;
  onRemove: (tag: string) => void;
};

const Tag = (props: { name: string; onClick: (name: string) => void }) => {
  const { name, onClick } = props;

  return (
    <span
      key={name}
      className="flex items-center gap-1 bg-blue-500 text-white text-sm font-medium px-2.5 py-0.5 rounded"
    >
      {name}
      <button className="text-white" onClick={() => onClick(name)}>
        &times;
      </button>
    </span>
  );
};

export const TagSearch: React.FC<TagSearchProps> = ({
  availableTags,
  selectedTags,
  onSelect,
  onRemove,
}) => {
  const [query, setQuery] = useState('');

  const filteredTags = availableTags.filter((tag) =>
    tag.toLowerCase().includes(query.toLowerCase())
  );

  const addTag = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      onSelect(tag); // 외부로 태그를 전달, 예: 검색 결과 필터링 업데이트
    }
    setQuery(''); // 입력 필드 초기화
  };

  return (
    <div className="w-full max-w-md p-4">
      <Command className="rounded-lg border shadow-md">
        <CommandInput
          placeholder="기술 스택을 입력해주세요."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList className="h-[100px]">
          <CommandEmpty>검색된 기술 스택이 없습니다.</CommandEmpty>
          <CommandGroup heading>
            {filteredTags.map((tag) => (
              <CommandItem
                key={tag}
                value={tag}
                onSelect={() => addTag(tag)}
                hidden={false}
                disabled={false}
                aria-disabled={false}
              >
                {tag}
              </CommandItem>
            ))}
          </CommandGroup>
        </CommandList>
      </Command>
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
