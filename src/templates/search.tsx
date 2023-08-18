import * as React from "react";
import {
  Template,
  GetPath,
  TemplateRenderProps,
  GetHeadConfig,
  HeadConfig,
  TemplateProps,
} from "@yext/pages";
import "../index.css";
import {
  SearchHeadlessProvider,
  provideHeadless,
  HeadlessConfig,
  Environment,
} from "@yext/search-headless-react";

import {
  SearchBar,
  StandardCard,
  VerticalResults,
  SpellCheck,
  ResultsCount,
  Pagination,
  } from "@yext/search-ui-react";

export const getPath: GetPath<TemplateProps> = () => {
  return "/search";
};

export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: `Turtlehead Tacos Search`,
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const headlessConfig: HeadlessConfig = {
  apiKey: "416765780fdc2d0c1daab985a0ccc178",
  experienceKey: "turtlehead",
  locale: "en",
  verticalKey: "faqs",
  environment: Environment.SANDBOX,
}

const searcher = provideHeadless(headlessConfig);

const Search: Template<TemplateRenderProps> = () => {
  return (
    <SearchHeadlessProvider searcher={searcher}>
      <div className="px-4 py-8">
        <div className="mx-auto flex max-w-5xl flex-col">
          <SearchBar />
          <SpellCheck />
          <ResultsCount />
          <VerticalResults
            CardComponent={StandardCard}
            displayAllOnNoResults={false}
          />
        </div>
        <Pagination />
      </div>
    </SearchHeadlessProvider>
  );
};

export default Search;