import * as React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import { BlogPost } from '../../entity/BlogPost';
import CardItem from '../../common/CardItem';
import { WHITE, GRAY, GREEN, GREEN_LIGHT } from '../../config/colors';

export interface Props {
    listOfBlogPosts: Array<BlogPost>
    loading: boolean;
    onCardPressed: Function;
    onShowCreatePostButtonPressed: Function;
}
export interface State { }

export default class Styles extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
    }

    /**
     * Returns a blog post card that will be renderd on each row of the flatlist
     *
     * @private
     * @param {BlogPost} blogPost to be rendered
     * @memberof Styles
     */
    private renderItem = (blogPost: BlogPost) => {
        return (
            <CardItem
                style={styles.cardItemContainer}
                title={blogPost.getTitle()}
                onCardPressed={() => this.props.onCardPressed(blogPost)}
            />
        )
    }

    render() {
        return (
            <View
                style={{ flex: 1 }}
            >
                {
                    this.props.loading &&
                    <View
                        style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
                    >
                        <ActivityIndicator
                            size='large'
                            color={GREEN}
                        />
                    </View>
                }
                {
                    !this.props.loading &&
                    <FlatList
                        data={this.props.listOfBlogPosts}
                        scrollEnabled={true}
                        windowSize={3}
                        keyExtractor={(_item, index) => this.props.listOfBlogPosts[index].getId().toString()}
                        renderItem={(listRenderItem) => this.renderItem(listRenderItem.item)}
                    />
                }
                {
                    !this.props.loading &&
                    <TouchableOpacity
                        style={styles.showPostsButton}
                        onPress={() => this.props.onShowCreatePostButtonPressed()}
                    >
                        <Text
                            style={styles.text}
                        >{'Create an article'}</Text>
                    </TouchableOpacity>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardItemContainer: {
        borderRadius: 10,
        backgroundColor: WHITE,
        height: 150,
        width: null,
        flex: 1,
        margin: 10,
        elevation: 3,
        shadowColor: GRAY,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowRadius: 4,
        shadowOpacity: 3
    },
    showPostsButton: {
        backgroundColor: GREEN_LIGHT,
        height: 60,
        width: 160,
        borderRadius: 40,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 10,
        elevation: 5,
        shadowColor: GRAY,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 2,
        shadowOpacity: 3
    },
    text: {
        color: WHITE,
        fontSize: 18
    }
});