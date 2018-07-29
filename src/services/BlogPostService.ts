import { BlogPost } from '../entity/BlogPost';

export class BlogPostService {
    private blogPost: BlogPost;

    constructor() {
        this.blogPost = new BlogPost();
    }
    
    /**
     * Retrieves a list of blog posts for the current user and returns a list of blog posts
     *
     * @param {string} userId Id of current user
     * @returns {Promise<Array<BlogPosts>>} list of retrieved blog posts
     * @memberof PostsService
     */
    async retrieveListOfPosts(userId: number): Promise<Array<BlogPost>> {
        let response;
        let responseJson;

        try {
            response = await fetch(BLOG_POST_URL, {
                method: 'GET'
            });
        } catch (error) {
            return Promise.reject(error.code);
        }
        responseJson = await response.json();

        if (response.status === 200) {
            console.log('response --- ', responseJson);
        }
    }

}