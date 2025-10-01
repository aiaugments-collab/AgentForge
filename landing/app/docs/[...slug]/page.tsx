import { notFound } from 'next/navigation';
import { readFileSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { MDXRemote } from 'next-mdx-remote/rsc';
import DocsContent from '../components/DocsContent';

interface DocsPageProps {
  params: {
    slug: string[];
  };
}

async function getDocContent(slug: string[]) {
  try {
    const filePath = join(process.cwd(), 'app', 'docs', ...slug) + '.mdx';
    const fileContent = readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContent);
    
    return {
      frontmatter: data,
      content,
    };
  } catch (error) {
    return null;
  }
}

export default async function DocsPage({ params }: DocsPageProps) {
  const resolvedParams = await params;
  const docContent = await getDocContent(resolvedParams.slug);
  
  if (!docContent) {
    notFound();
  }

  return (
    <DocsContent 
      frontmatter={docContent.frontmatter}
      content={docContent.content}
      slug={resolvedParams.slug}
    />
  );
}

// Generate static params for all documentation pages
export async function generateStaticParams() {
  // This would ideally read from the docs.json file to generate all possible routes
  // For now, we'll return some common paths
  return [
    { slug: ['getting-started', 'introduction'] },
    { slug: ['getting-started', 'principles'] },
    { slug: ['flows', 'building-flows'] },
    { slug: ['flows', 'passing-data'] },
    { slug: ['ai', 'mcp'] },
  ];
}
