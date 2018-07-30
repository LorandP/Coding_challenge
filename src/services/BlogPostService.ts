import BlogPost from '../entity/BlogPost';
import { BLOG_POST_URL, JSON_HEADER } from '../config/server';

export default class BlogPostService {
    /**
     * Retrieves a list of blog posts for the current user and returns a list of blog posts
     *
     * @param {string} userId Id of current user
     * @returns {Promise<Array<BlogPosts>>} list of retrieved blog posts
     * @memberof PostsService
     */
    async retrieveListOfPosts(currentUserId: number): Promise<Array<BlogPost>> {
        let response;
        let responseJson;
        const errorMessage = 'Unknown error. Please try again later.';

        try {
            response = await fetch(BLOG_POST_URL, {
                headers: JSON_HEADER,
                method: 'GET'
            });
            responseJson = await response.json();
        } catch (error) {
            return Promise.reject(errorMessage);
        }
        if (response.status === 200) {
            let arrayOfBlogPosts = new Array<BlogPost>();
            await Promise.all(responseJson.map((post) => {
                if (post.userId === currentUserId) {
                    let blogPost = new BlogPost();
                    blogPost.setId(post.id);
                    blogPost.setTitle(post.title);
                    blogPost.setBody(post.body);
                    blogPost.setUserId(post.userId);
                    arrayOfBlogPosts.push(blogPost);
                }
            }));

            return arrayOfBlogPosts;
        } else {
            return Promise.reject(errorMessage);
        }
    }


    /**
     * Posts a new article to the server.
     * Adds the newly created article to the current list of articles
     *
     * @param {string} userId the article should be added to
     * @param {Array<BlogPost>} existingArticles list of existing articles in the phone
     * @param {BlogPost} newlyCreatedArticle that needs to be added to the existing list of articles and posted to the server
     * @returns
     * @memberof BlogPostService
     */
    async postBlogPost(existingArticles: Array<BlogPost>, newlyCreatedArticle: BlogPost): Promise<Array<BlogPost>> {
        let response;
        let responseJson;

        try {
            response = await fetch(BLOG_POST_URL, {
                method: 'POST',
                headers: JSON_HEADER,
                body: JSON.stringify({
                    title: newlyCreatedArticle.getTitle(),
                    body: newlyCreatedArticle.getBody(),
                    userId: newlyCreatedArticle.getUserId()
                })
            });
            responseJson = await response.json();
        } catch (error) {
            return Promise.reject('Unkown error. Please try again later.');
        }
        if (response.status === 201) {
            let newBlogPost = new BlogPost();
            let lastBlogPost = existingArticles[existingArticles.length - 1];
            newBlogPost.setUserId(responseJson.userId);
            newBlogPost.setId(lastBlogPost.getId() + 1);
            newBlogPost.setTitle(responseJson.title);
            newBlogPost.setBody(responseJson.body);

            existingArticles.push(newBlogPost);
            return existingArticles;
        } else {
            return Promise.reject('Unkown error. Please try again later.');
        }

    }

}