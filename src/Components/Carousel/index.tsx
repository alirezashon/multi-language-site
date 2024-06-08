import { Galleria, GalleriaResponsiveOptions } from "primereact/galleria";
import Image from "next/image";
import styles from "./index.module.css";
import { Carouseled } from "@/DTO";

interface Props {
  data: Carouseled[] | undefined;
  isLoading: boolean;
}

const CircularDemo: React.FC<Props> = ({ data, isLoading }) => {
  const responsiveOptions: GalleriaResponsiveOptions[] = [
    {
      breakpoint: "991px",
      numVisible: 4,
    },
    {
      breakpoint: "767px",
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  const itemTemplate = (item: Carouseled) => {
    return (
      <div className={styles.carousel}>
        <Image
          className={styles.carouselimage}
          src={`data:image/jpeg;base64,${item.src}`}
          alt={item?.alt}
          width={1111}
          height={1111}
        />
      </div>
    );
  };



  return (
    <div className="card">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <Galleria
          value={data}
          responsiveOptions={responsiveOptions}
          numVisible={5}
          circular
          autoPlay
          transitionInterval={3000}
          showItemNavigators
          showItemNavigatorsOnHover
          showIndicators
          showThumbnails={false}
          item={itemTemplate}
          style={{ width: "100%" ,direction:'ltr'}}
        />
      )}
    </div>
  );
};

export default CircularDemo;

