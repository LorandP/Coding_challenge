import * as React from 'react'
import { StyleSheet, Text, View, FlatList, ActivityIndicator, TouchableOpacity } from 'react-native';
import BlogPost from '../../entity/BlogPost';
import CardItem from './CardItem';
import ErrorText from '../../common/ErrorText';
import ButtonGeneric from '../../common/ButtonGeneric';
import { WHITE, GRAY, GREEN, CYAN, SHADOW_COLOR } from '../../config/colors';

export interface Props {
    listOfBlogPosts: Array<BlogPost>
    loading: boolean;
    onCardPressed: Function;
    onShowCreatePostButtonPressed: Function;
    errorMessage: string;
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
                content={blogPost.getBody()}
                onCardPressed={() => this.props.onCardPressed(blogPost)}
            />
        )
    }

    render() {
        return (
            <View
                style={{ flex: 1, backgroundColor: WHITE }}
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
                        style={{ flex: 1 }}
                        data={this.props.listOfBlogPosts}
                        scrollEnabled={true}
                        windowSize={3}
                        keyExtractor={(_item, index) => this.props.listOfBlogPosts[index].getId().toString()}
                        renderItem={(listRenderItem) => this.renderItem(listRenderItem.item)}
                    />
                }
                {
                    !this.props.loading &&
                    <View
                        style={styles.buttonContainer}
                    >
                        <ButtonGeneric
                            buttonStyle={styles.showPostsButton}
                            textStyle={styles.text}
                            buttonText={'Create An Article'}
                            onButtonPressed={() => this.props.onShowCreatePostButtonPressed()}
                        />
                    </View>

                }
                {
                    !this.props.loading &&
                    this.props.errorMessage !== '' &&
                    <ErrorText
                        errorMessage={this.props.errorMessage}
                    />
                }

            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardItemContainer: {
        borderRadius: 5,
        backgroundColor: WHITE,
        height: 110,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 10,
        marginBottom: 10,
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
        backgroundColor: CYAN,
        height: 60,
        width: 160,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        bottom: 10,
        elevation: 5,
        shadowColor: SHADOW_COLOR,
        shadowOffset: {
            width: 0,
            height: 4
        },
        shadowRadius: 2,
        shadowOpacity: 3
    },
    text: {
        color: WHITE,
        fontSize: 18,
        fontFamily: 'Lato-Regular'
    },
    buttonContainer: {
        paddingTop: 15,
        elevation: 35,
        backgroundColor: WHITE,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: SHADOW_COLOR,
        shadowRadius: 6,
        shadowOpacity: 2
    }
});