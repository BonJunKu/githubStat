import React from 'react';
import clsx from 'clsx';
import { useBlogPost } from '@docusaurus/theme-common/internal';
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import Giscus from '@giscus/react';
import { useColorMode } from '@docusaurus/theme-common';
// apply a bottom margin in list view
function useContainerClassName() {
  const { isBlogPostPage } = useBlogPost();
  return !isBlogPostPage ? 'margin-bottom--xl' : undefined;
}
export default function BlogPostItem({ children, className }) {
  const containerClassName = useContainerClassName();
  const { colorMode } = useColorMode();
  return (
    <BlogPostItemContainer className={clsx(containerClassName, className)}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
      <br />
      <Giscus
        id='comments'
        repo='BonJunKu/BonJunKu'
        repoId='R_kgDOGHrcBw'
        category='Comments'
        categoryId='DIC_kwDOGHrcB84CS81C'
        mapping='pathname'
        reactionsEnabled='1'
        emitMetadata='0'
        inputPosition='top'
        theme={colorMode}
        lang='en'
        loading='lazy'
      />
    </BlogPostItemContainer>
  );
}
