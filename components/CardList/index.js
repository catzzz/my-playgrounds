import Card from '../Card'
import {
    Title,
    CardContainer
}from './cardlist.module'
const CardList = ({title, playgrounds}) => {
  
    return (
        <div >
            <Title>{title}</Title>
            <CardContainer>
                {playgrounds.map((playground, index)=>(
                    <Card 
                        image={playground.image}
                        title = {playground.title}
                        location= {playground.location}
                        rates ={playground.rates}
                        key = {index}
                    />
                ))}
            </CardContainer>

        </div>
    )
}

export default CardList;