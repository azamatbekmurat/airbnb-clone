import React from 'react'
import "./SearchPage.css"
import {Button} from "@material-ui/core"
import SearchResult from "./SearchResult"

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__info">
                <p>62 stays 26 august to 30 august 2 guests</p>
                <h1>Stays nearby</h1>
                <Button variant="outlined">Cancellation Flexility</Button>
                <Button variant="outlined">Type of place</Button>
                <Button variant="outlined">Price</Button>
                <Button variant="outlined">Rooms and beds</Button>
                <Button variant="outlined">More filters</Button>
                <SearchResult 
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usQp=CAU"
                    location="Private room in center of London"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest 1 bedroom 1 bed 1.5 shared bathroom Wifi Kitchen Free parking Washing"
                    star={4.73}
                    price="$30 / night"
                    total="$117"
                />
                <SearchResult 
                    img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                    location="Room in of Seattle"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest 1 bedroom 1 bed 1.5 shared bathroom Wifi Kitchen Free parking Washing"
                    star={4.43}
                    price="$40 / night"
                    total="$207"
                />
                <SearchResult 
                    img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                    location="Room in Redmond"
                    title="Stay at this spacious Edwardian House"
                    description="1 guest 1 bedroom 1 bed 1.5 shared bathroom Wifi Kitchen Free parking Washing"
                    star={4.57}
                    price="$45 / night"
                    total="$93"
                />
            </div>
            
        </div>
    )
}

export default SearchPage
