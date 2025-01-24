import Image from "next/image";
import Link from "next/link";

interface ListCardProps {
  imageUrl: string;
  name: string;
  category: string;
  description: string;
}

const ListCard = ({ imageUrl, name, category, description }: ListCardProps) => {
  return (
    <Link href={`/detail/${encodeURIComponent(name.replaceAll(" ", "_"))}`}>
      <article>
        <Image
          src={imageUrl}
          alt={`${name}-thumbnail`}
          width={190}
          height={190}
        />
        <div className="absolute mt-[0.8rem] flex items-center gap-[1rem]">
          <h3 className="font-title3_b_18 text-w100">{name}</h3>
          <p className="font-body4_r_12 text-w60">{category}</p>
        </div>
        <p className="font-body3_r_14 mt-[3.9rem] text-w95">{description}</p>
      </article>
    </Link>
  );
};

export default ListCard;
