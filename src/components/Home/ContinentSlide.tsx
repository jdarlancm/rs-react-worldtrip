import { Box, Text, Link as ChakraLink } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Continent {
  id: string;
  name: string;
  description: string;
  image: string;
}

interface ContinentSlideProps {
  continents: Continent[];
}

export default function ContinentSlide({ continents }: ContinentSlideProps) {
  return (
    <Box
      w={["100%", "100%", "100%", "80%"]}
      height={[250, 350, 450]}
      alignSelf="center"
      mt="16"
    >
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        className="mySwiper"
      >
        {continents.map((continent) => (
          <SwiperSlide
            style={{
              backgroundImage: `url('/images/${continent.image}')`,
            }}
            className="mySwiperSlide"
            key={continent.id}
          >
            <Link href={`/continent/${continent.id}`}>
              <ChakraLink textDecoration="none">
                <Text
                  color="gray.50"
                  fontSize={["3xl", "4xl", "5xl"]}
                  fontWeight="bold"
                  mt="32"
                >
                  {continent.name}
                </Text>
                <Text
                  color="gray.50"
                  fontSize={["lg", "xl", "2xl"]}
                  fontWeight="bold"
                >
                  {continent.description}
                </Text>
              </ChakraLink>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
