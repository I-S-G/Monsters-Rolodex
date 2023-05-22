import { Component } from "react";
import Monster from "../monster/monster";
import "./monster-list.css";

class MonsterList extends Component {
    render() {
       const { filteredMonsters } = this.props;
        return(
            <div className="monster-list">
                {
                filteredMonsters.map((monster) => {
                  return <Monster monster = {monster} key = {monster.id} />
                })
              }
            </div>   
        )
    }
}

export default MonsterList;