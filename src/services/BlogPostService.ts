import { BlogPost } from '../entity/BlogPost';
import { BLOG_POST_URL, JSON_HEADER } from '../config/server';

export class BlogPostService {
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
                    arrayOfBlogPosts.push(blogPost);
                }
            }));

            return arrayOfBlogPosts;
        } else {
            return Promise.reject(errorMessage);
        }
    }

}