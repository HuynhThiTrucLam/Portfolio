import React from "react";
import { abouts, type About as AboutType } from "../../services/about";
import Tittle from "../Title/Tittle";
import { Card, CardContent } from "../ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "../ui/carousel";
import styles from "./About.module.scss";

const About = () => {
  const [api, setApi] = React.useState<CarouselApi | null>(null);
  const [selectedIndex, setSelectedIndex] = React.useState(0); // default to 2nd slide

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => {
      setSelectedIndex(api.selectedScrollSnap());
    };
    api.on("select", onSelect);
    // Set initial index
    setSelectedIndex(api.selectedScrollSnap());
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  return (
    <Carousel className={styles.About} setApi={setApi} opts={{ startIndex: 0 }}>
      <Tittle title="About me" className={styles["About-title"]} />
      <CarouselContent>
        {abouts.map((about: AboutType) => (
          <CarouselItem key={about.index}>
            <div>
              <Card>
                <CardContent>
                  <div className={styles["About-container"]}>
                    <div className={styles["About-left"]}>
                      <h2>{about.title}</h2>
                      <div className={styles["About-left-content"]}>
                        <p className={styles["date"]}>{about.date}</p>
                        <p>{about.description}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {selectedIndex > 0 && <CarouselPrevious className="border-0" />}
      {selectedIndex < abouts.length - 1 && <CarouselNext />}
    </Carousel>
  );
};

export default About;
