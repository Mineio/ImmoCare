import React from "react";
import {useState, useEffect} from "react";
import Axios from "axios";

const Home = () => {
    const [property, setProperty] = useState([]);

    useEffect(() => {
        selectProperties();
    }, []);

    const selectProperties = () => {
        Axios.get("http://localhost:3001/getProperties").then((response) => {
            setProperty(response.data);
        });
    };

    return (
        <div className="properties">
            <div className="searchbar"> Searchbar</div>
            <div className="listProperties">
                <table>
                    <tbody>
                    {property.map((val) => {
                        return (
                            <tr>
                                {/* Nach den val. kommen noch die richtigen Daten heran*/}
                                <td id="">{/*val.*/}</td>
                                <td id="">{/*val.*/}</td>
                                <td id="">{/*val.*/}</td>
                                <td id="">{/*val.*/}</td>
                                <td id="">{/*val.*/}</td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Home;
