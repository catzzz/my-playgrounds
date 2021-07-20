import Image from 'next/image'
import Rates from '../Rates'

import {
  CardStyles,
  CardDetail,
  CardTitle,
  CardSubTitle,
  CardBadge
} from './card.module'

const Card = ({ image, title, location, rates }) => {
    return (
      <CardStyles>
        <Image
          src={image}
          alt={title}
          height={897}
          width={1355}
        />
        <CardDetail>
          <CardTitle >{title}</CardTitle>
          <CardSubTitle>{location}</CardSubTitle>
          
         
        </CardDetail>
        <CardBadge>
          {rates > 0  && <Rates rates={rates} />}
        </CardBadge>
      
      </CardStyles>
    );
  };
  
  export default Card;