import React, { Component } from "react";
import "../css/HashTableApp.css";
import HashTable from "../classes/HashTable";

class HashTableApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialSize: 1,
      arraySize: [],
      addContent: "",
      find: "",
      erase: "",
      hTable: null
    };
    this.onChangeInitialSize = this.onChangeInitialSize.bind(this);
    this.onChangeAddContent = this.onChangeAddContent.bind(this);
    this.onChangeFind = this.onChangeFind.bind(this);
    this.onChangeErase = this.onChangeErase.bind(this);
    this.newHashTable = this.newHashTable.bind(this);
    this.addContent = this.addContent.bind(this);
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
  addContent() {}
  find() {}
  clear() {}
  erase() {}
  onChangeInitialSize(e) {
    this.setState({
      initialSize: e.target.value
    });
  }
  onChangeAddContent(e) {
    this.setState({
      addContent: e.target.value
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
        <div className="App-intro row">
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
                value={this.state.addContent}
                onChange={this.onChangeAddContent}
              />
              <button
                onClick={this.addContent}
                className="btn btn-default pull-left"
              >
                Add content
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
                      <div className="llist">
                        <div className="arrow initial-arrow">------→</div>
                        <div className="header llistnode">
                          <div className="value" />
                          <div className="next" />
                        </div>
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
