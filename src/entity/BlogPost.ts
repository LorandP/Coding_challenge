
/**
 * A model that represents a blog post
 *
 * @export
 * @class BlogPost
 */
export default class BlogPost {
    private userId: number;
    private id: number;
    private title: string;
    private body: string;

    public setId(id: number) {
        this.id = id;
    }

    public getId(): number {
        return this.id;
    }

    public setTitle(title: string) {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setBody(body: string) {
        this.body = body;
    }

    public getBody() {
        return this.body;
    }

    public setUserId(userId: number) {
        this.userId = userId;
    }
    
    public getUserId(): number {
        return this.userId;
    }
}