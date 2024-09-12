export interface IBlogPost {
    frontmatter: {
        title: string,
        pubDate: string,
        description: string,
        author: string,
        image: {
            url: string,
            alt: string,
        },
        tags: Array<string>,
    },
    url: string;
};