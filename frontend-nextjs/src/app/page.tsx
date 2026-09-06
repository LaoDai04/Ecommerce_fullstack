import ImageCarousel from "@/components/ImageCarousel";
import ProductCard from "@/components/ProductCard";
type NavItem = {
  name: string;
  href: string;
};

const navBar: NavItem[] = [
  { name: "Products", href: "/products" },
  { name: "Login", href: "/login" },
  { name: "Register", href: "/register" },
  { name: "Cart", href: "/cart" },
];

export default function Home() {
  return (
    <div className="w-full h-full">
      <ImageCarousel />
      <div className="flex gap-20">
        <ProductCard
          name={"Fresh Ceramic Table Fresh Ceramic Table123 12e2e11r11341"}
          price={15}
          imageUrl={"https://picsum.photos/seed/10/200/350"}
          averageRating={4}
          reviewCount={800}
        ></ProductCard>
        <ProductCard
          name={"Fresh Ceramic Table Fresh Ceramic Table123 12e2e11r11341"}
          price={15}
          imageUrl={"https://picsum.photos/seed/10/200/350"}
          averageRating={2}
          reviewCount={111}
        ></ProductCard>
        <ProductCard
          name={"Fresh Ceramic Table Fresh Ceramic Table123 12e2e11r11341"}
          price={0}
          imageUrl={"https://picsum.photos/seed/10/200/350"}
          averageRating={0}
          reviewCount={0}
        ></ProductCard>
        <ProductCard
          name={"Fresh Ceramic Table Fresh Ceramic Table123 12e2e11r11341"}
          price={0}
          imageUrl={"https://picsum.photos/seed/10/200/350"}
          averageRating={0}
          reviewCount={0}
        ></ProductCard>
      </div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maiores
      consectetur, qui illo ducimus dignissimos alias quidem sed iste laudantium
      voluptates incidunt id quia neque, minus unde iusto, molestias vero! Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Nihil, recusandae!
      Vero a quis neque sit, fuga facere laboriosam aperiam odit vitae eum
      cumque, architecto molestiae eligendi quos, non ea porro. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Adipisci, cumque suscipit
      tempora hic eligendi placeat praesentium totam, nostrum dignissimos neque
      ipsam facilis delectus ducimus ea! At inventore sapiente sed nulla! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Pariatur a
      necessitatibus asperiores! Voluptates praesentium, quisquam saepe magni ut
      dolores odio quasi voluptatibus fugit, quam illo omnis nesciunt doloremque
      amet tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Possimus maiores consectetur, qui illo ducimus dignissimos alias quidem
      sed iste laudantium voluptates incidunt id quia neque, minus unde iusto,
      molestias vero! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nihil, recusandae! Vero a quis neque sit, fuga facere laboriosam aperiam
      odit vitae eum cumque, architecto molestiae eligendi quos, non ea porro.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, cumque
      suscipit tempora hic eligendi placeat praesentium totam, nostrum
      dignissimos neque ipsam facilis delectus ducimus ea! At inventore sapiente
      sed nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Pariatur a necessitatibus asperiores! Voluptates praesentium, quisquam
      saepe magni ut dolores odio quasi voluptatibus fugit, quam illo omnis
      nesciunt doloremque amet tempore? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Possimus maiores consectetur, qui illo ducimus
      dignissimos alias quidem sed iste laudantium voluptates incidunt id quia
      neque, minus unde iusto, molestias vero! Lorem ipsum dolor sit, amet
      consectetur adipisicing elit. Nihil, recusandae! Vero a quis neque sit,
      fuga facere laboriosam aperiam odit vitae eum cumque, architecto molestiae
      eligendi quos, non ea porro. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Adipisci, cumque suscipit tempora hic eligendi placeat
      praesentium totam, nostrum dignissimos neque ipsam facilis delectus
      ducimus ea! At inventore sapiente sed nulla! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Pariatur a necessitatibus asperiores!
      Voluptates praesentium, quisquam saepe magni ut dolores odio quasi
      voluptatibus fugit, quam illo omnis nesciunt doloremque amet tempore?
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus maiores
      consectetur, qui illo ducimus dignissimos alias quidem sed iste laudantium
      voluptates incidunt id quia neque, minus unde iusto, molestias vero! Lorem
      ipsum dolor sit, amet consectetur adipisicing elit. Nihil, recusandae!
      Vero a quis neque sit, fuga facere laboriosam aperiam odit vitae eum
      cumque, architecto molestiae eligendi quos, non ea porro. Lorem ipsum
      dolor sit amet consectetur, adipisicing elit. Adipisci, cumque suscipit
      tempora hic eligendi placeat praesentium totam, nostrum dignissimos neque
      ipsam facilis delectus ducimus ea! At inventore sapiente sed nulla! Lorem
      ipsum dolor sit amet consectetur adipisicing elit. Pariatur a
      necessitatibus asperiores! Voluptates praesentium, quisquam saepe magni ut
      dolores odio quasi voluptatibus fugit, quam illo omnis nesciunt doloremque
      amet tempore? Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Possimus maiores consectetur, qui illo ducimus dignissimos alias quidem
      sed iste laudantium voluptates incidunt id quia neque, minus unde iusto,
      molestias vero! Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      Nihil, recusandae! Vero a quis neque sit, fuga facere laboriosam aperiam
      odit vitae eum cumque, architecto molestiae eligendi quos, non ea porro.
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci, cumque
      suscipit tempora hic eligendi placeat praesentium totam, nostrum
      dignissimos neque ipsam facilis delectus ducimus ea! At inventore sapiente
      sed nulla! Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Pariatur a necessitatibus asperiores! Voluptates praesentium, quisquam
      saepe magni ut dolores odio quasi voluptatibus fugit, quam illo omnis
      nesciunt doloremque amet tempore? Lorem ipsum dolor sit amet consectetur
      adipisicing elit. Possimus maiores consectetur, qui illo ducimus
      dignissimos alias quidem sed iste laudantium voluptates incidunt id quia
      neque, minus unde iusto, molestias vero! Lorem ipsum dolor sit, amet
      consectetur adipisicing elit. Nihil, recusandae! Vero a quis neque sit,
      fuga facere laboriosam aperiam odit vitae eum cumque, architecto molestiae
      eligendi quos, non ea porro. Lorem ipsum dolor sit amet consectetur,
      adipisicing elit. Adipisci, cumque suscipit tempora hic eligendi placeat
      praesentium totam, nostrum dignissimos neque ipsam facilis delectus
      ducimus ea! At inventore sapiente sed nulla! Lorem ipsum dolor sit amet
      consectetur adipisicing elit. Pariatur a necessitatibus asperiores!
      Voluptates praesentium, quisquam saepe magni ut dolores odio quasi
      voluptatibus fugit, quam illo omnis nesciunt doloremque amet tempore?
    </div>
  );
}
