import ItemList from "../components/ItemList"
import TextBlock from "../components/TextBlock"
import Footer from "../components/Footer"
import ImageWithText from "../components/ImageWithText"
export default function Test(){
    var url = "https://fastly.picsum.photos/id/623/200/300.jpg?hmac=2LlPuWimnDeGk-zZPKKgRVozFd3c-26BinXWcxfTtXo"
    var array = ['gym','programming']
    return(
        <div>
        <TextBlock heading={"Witaj"} content={"witaj na naszej stronie"}/>
        <ItemList items={array}/>
        <ImageWithText imageUrl={url} text={"tego typu"}/>
        <Footer />
        </div>
    )
}