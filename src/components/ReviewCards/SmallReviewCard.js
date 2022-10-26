import React from 'react'
import Person from '../../assets/person.png'
import {Card,
        Reviewer,
        ProfilePhoto,
        TitleName,
        TitleComment,
        Photo,
        ReviewerName,
        ReviewContainer,
        RestaurantName,
        Review,
        ReadMore,
        Buttons,
        CommentButton,
        LatestComments,
        OtherReviewerOne,
        OtherNameOne,
        OtherCommmentOne,
        OtherReviewerTwo,
        OtherNameTwo,
        OtherCommmentTwo} from './SmallReviewCard.styled'

const SmallReviewCard = () => {
  return (
    <div>
        <div>
            <Card> 
                <Reviewer>
                    <ProfilePhoto>
                        <Photo src={Person}/>
                    </ProfilePhoto>
                    <ReviewerName>
                        <TitleName>
                        Laurent H.
                        </TitleName>
                        <TitleComment>
                        6 reviews in total
                        </TitleComment>
                    </ReviewerName>
                </Reviewer>
                <ReviewContainer>
                    <RestaurantName>
                        Colinz Bar
                    </RestaurantName>
                    <Review>
                    Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell... <ReadMore>read more</ReadMore>
                    </Review>
                    <Buttons>
                        <CommentButton>

                        </CommentButton>
                    </Buttons>
                </ReviewContainer>
                <LatestComments>
                    Latest comments
                    <OtherReviewerOne>
                        <OtherNameOne>
                            Colin Wirz
                        </OtherNameOne>
                        <OtherCommmentOne>
                        Actually you have no taste!
                        </OtherCommmentOne>
                    </OtherReviewerOne>
                    <OtherReviewerOne>
                        <OtherNameOne>
                            Colin Wirz
                        </OtherNameOne>
                        <OtherCommmentOne>
                        Actually you have no taste!
                        </OtherCommmentOne>
                    </OtherReviewerOne>

                </LatestComments>

            </Card>
        </div>
    </div>
  )
}



export default SmallReviewCard