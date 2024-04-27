import React, { useState } from 'react';
import { Combobox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';

interface TagSearchProps {
  availableTags: string[];
  selectedTags: string[];
  onSelect: (tag: string) => void;
  onRemove: (tag: string) => void;
}

const TagSearch: React.FC<TagSearchProps> = ({
  availableTags,
  selectedTags,
  onSelect,
  onRemove,
}) => {
  const [query, setQuery] = useState('');

  const filteredTags =
    query === ''
      ? []
      : availableTags.filter((tag) =>
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
      <Combobox value={query} onChange={addTag}>
        <div className="relative mt-1">
          <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
            <Combobox.Input
              className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
              displayValue={(tag: string) => tag}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="기술 스택을 입력해주세요."
            />
            {/* <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
              <MagnifyingGlassIcon />
            </Combobox.Button> */}
          </div>
          <Combobox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredTags.length === 0 && query !== '' ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredTags.map((tag) => (
                <Combobox.Option
                  key={tag}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-teal-600 text-white' : 'text-gray-900'
                    }`
                  }
                  value={tag}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {tag}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? 'text-white' : 'text-teal-600'
                          }`}
                        >
                          b
                          <CheckIcon />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </div>
      </Combobox>
      <div className="flex flex-wrap gap-2 mt-2">
        {selectedTags.map((tag) => (
          <span
            key={tag}
            className="flex items-center gap-1 bg-blue-500 text-white text-sm font-medium px-2.5 py-0.5 rounded"
          >
            {tag}
            <button className="text-white" onClick={() => onRemove(tag)}>
              &times;
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagSearch;
