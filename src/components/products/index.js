import React, { Component } from 'react';
import data from "../../products.json";
import tagsData from "../../tagstree.json";
import ListOfProducts from './listOfProducts';


export default class Products extends Component {

    constructor(props) {
        super(props);

        this.state = {
            products: data.products,
            tags: tagsData
        }
    }    
    
    

    

    //function to reform the tags to one layer array and each element is a full path for the tag and the children
    extractingPaths = (node, nodeFullPath) => {
        nodeFullPath += node.alias + "/";
        if(!node.children){
            return nodeFullPath
        }
        node.children.forEach(child => {
            if(!child.children){
                nodeFullPath = nodeFullPath  + child.alias + "/"
            } else{
                nodeFullPath = "/" + this.extractingPaths(child, nodeFullPath)
            }
        });
        return nodeFullPath
    }

    formingProductPath = (product, pathArray) => {
        let finalPath = "";

        Array.prototype.forEach.call(product.tags, tag => {
            Array.prototype.forEach.call(pathArray, path => {
                if(path.includes(tag.alias)){
                    finalPath += path;
                }
            })
            finalPath += tag.alias + "/"
        });        
        return finalPath;
    }

    render() {
        
        let pathArray = [];
        let nodeFullPath = "";
        let finalProductPaths = [];
        let listOfProducts = []

        
        Array.prototype.forEach.call(this.state.tags, tag => {
            pathArray.push(this.extractingPaths(tag, nodeFullPath));
        })

        Array.prototype.forEach.call(this.state.products, product => {
            let productObject = {
                name: "",
                image_url: "",
                tags: []
            }
            let productTags = this.formingProductPath(product, pathArray).split("/");
            //finalProductPaths.push(this.formingProductPath(product, pathArray));
            productObject.name = product.name;
            productObject.image_url = "";
            productTags.forEach(tag => {
                productObject.tags.push(tag)
            })
            
            listOfProducts.push(productObject);
        })
                
        return (
            <div>
               <ListOfProducts listOfProducts = {listOfProducts} />
            </div>
        )
    }
}
