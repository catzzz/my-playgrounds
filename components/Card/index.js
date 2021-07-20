import Image from "next/image";
import Rates from "../Rates";
import Link from "next/link";
import {
  CardStyles,
  CardDetail,
  CardTitle,
  CardSubTitle,
  CardBadge,
} from "./card.module";

const Card = ({ image, title, location, rates, slug ,id }) => {
  return (
    <CardStyles>
      <Link href={`/playgrounds/${slug}`}>
        <a>
          <Image src={image} alt={title} height={897} width={1355} />
          <CardDetail>
            <CardTitle>{title}</CardTitle>
            <CardSubTitle>{location}</CardSubTitle>
          </CardDetail>
          <CardBadge>{rates > 0 && <Rates rates={rates} />}</CardBadge>
        </a>
      </Link>
    </CardStyles>
  );
};

export default Card;
