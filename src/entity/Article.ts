
export default class Article {
    private userId: number;
    private title: string;
    private content: string;

    public setUserId(userId: number) {
        this.userId = userId;
    }
    
    public getUserId(): number {
        return this.userId;
    }

    public setTite(title: string) {
        this.title = title;
    }

    public getTitle(): string {
        return this.title;
    }

    public setContent(content: string) {
        this.content = content;
    }

    public getContent(): string {
        return this.content;
    }
}