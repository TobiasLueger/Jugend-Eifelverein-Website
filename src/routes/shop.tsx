import ShopList from "../components/ShopList/ShopList";

export default function Shop() {
  return (
    <main className="pt-[116px]">
      <h2>Shop</h2>
      <p className="mt-2 lg:pl-2">
        Hier ist unser Toller Stuff den ihr euch holen könnt:
      </p>
      <ShopList/>
    </main>
  )
}