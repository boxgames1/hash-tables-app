import React, { Component } from "react";
import "../css/HashTableApp.css";
import HashTable from "../classes/HashTable";

class HashTableApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSize: 1,
      arraySize: [],
      insert: "",
      find: "",
      erase: "",
      hTable: null
    };
    this.onChangeInitialSize = this.onChangeInitialSize.bind(this);
    this.onChangeInsert = this.onChangeInsert.bind(this);
    this.onChangeFind = this.onChangeFind.bind(this);
    this.onChangeErase = this.onChangeErase.bind(this);
    this.newHashTable = this.newHashTable.bind(this);
    this.insert = this.insert.bind(this);
    this.find = this.find.bind(this);
    this.clear = this.clear.bind(this);
    this.erase = this.erase.bind(this);
  }
  newHashTable() {
    let hTable = new HashTable(this.state.initialSize);
    let arraySize = [];
    for (let i = 0; i < hTable.size; i++) {
      arraySize.push(i);
    }
    this.setState({
      arraySize,
      hTable
    });
  }
  insert() {
    if (this.state.hTable !== null) {
      this.state.hTable.insert(this.state.insert);
      this.forceUpdate();
    }
  }
  find() {
    /*if (this.state.hTable !== null) {
      const result = this.state.hTable.find(this.state.find);
    }*/
    // This is not the truly way to find and element in the table
    // The good one is the above commented lines
    const found = document.querySelector(
      '[data-key="' + this.state.find + '"]'
    );
    if (found != null) {
      found.classList.add("found");
      setTimeout(() => {
        found.classList.remove("found");
      }, 3000);
    }
  }
  clear() {
    if (this.state.hTable !== null) {
      this.state.hTable.clear();
      this.forceUpdate();
    }
  }
  erase() {
    if (this.state.hTable !== null && this.state.erase !== null) {
      this.state.hTable.erase(this.state.erase);
      this.forceUpdate();
    }
  }
  onChangeInitialSize(e) {
    let initialSize = parseInt(e.target.value);
    if (isNaN(initialSize)) initialSize = 1;
    this.setState({
      initialSize
    });
  }
  onChangeInsert(e) {
    this.setState({
      insert: e.target.value
    });
  }
  onChangeFind(e) {
    this.setState({
      find: e.target.value
    });
  }
  onChangeErase(e) {
    this.setState({
      erase: e.target.value
    });
  }
  render() {
    return (
      <div className="Hash-Table-App">
        <div className="App-intro">
          <div className="App-buttons col-md-12">
            <div className="pull-left col-md-2">
              <input
                id="size-new"
                className="pull-left"
                value={this.state.initialSize}
                onChange={this.onChangeInitialSize}
              />
              <button
                onClick={this.newHashTable}
                className="btn btn-default pull-left"
              >
                New H. Table
              </button>
            </div>
            <div className="pull-left col-md-3">
              <input
                id="add-content"
                className="pull-left"
                value={this.state.insert}
                onChange={this.onChangeInsert}
              />
              <button
                onClick={this.insert}
                className="btn btn-default pull-left"
              >
                Insert
              </button>
            </div>
            <div className="pull-left col-md-3">
              <input
                id="find"
                className="pull-left"
                value={this.state.find}
                onChange={this.onChangeFind}
              />
              <button onClick={this.find} className="btn btn-default pull-left">
                Find
              </button>
            </div>
            <div className="pull-left col-md-3">
              <input
                id="erase"
                className="pull-left"
                value={this.state.erase}
                onChange={this.onChangeErase}
              />
              <button
                onClick={this.erase}
                className="btn btn-default pull-left"
              >
                Erase
              </button>
            </div>
            <div className="pull-left col-md-1">
              <button
                onClick={this.clear}
                className="btn btn-default pull-left"
              >
                Clear
              </button>
            </div>
          </div>
          <div className="App-canvas col-md-12">
            <div className="content">
              <div className="htable">
                {this.state.hTable !== null &&
                  this.state.arraySize.length > 0 &&
                  this.state.arraySize.map(i => (
                    <div key={i} className="bucket">
                      <span>Bucket {i}</span>
                      <div className="llist">
                        <div className="header llistnode">
                          <div className="arrow initial-arrow">------→</div>
                          <div className="value">Header</div>
                          <div className="next" />
                        </div>
                        {this.state.hTable.buckets[i].values().length > 0 &&
                          this.state.hTable.buckets[i].values().map(value => (
                            <div
                              key={value}
                              data-key={value}
                              className="llistnode"
                              title={value}
                            >
                              <div className="arrow">--→</div>
                              <div className="value">{value}</div>
                              <div className="next" />
                            </div>
                          ))}
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HashTableApp;
