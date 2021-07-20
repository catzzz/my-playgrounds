import Card from '../Card'
import {
    Title,
    CardContainer
}from './cardlist.module'
import Link from 'next/link'
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
                        slug = {playground.slug}
                    />
                
                ))}
            </CardContainer>

        </div>
    )
}

export default CardList;