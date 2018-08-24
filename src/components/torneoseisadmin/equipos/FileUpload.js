import React, { Component } from 'react';
import firebase from '../../../firebase';

class FileUpload extends Component {
    constructor () {
        super()
        this.state = {
            uploadValue: 0
        }
    }

    handleOnChange (event) {
        const file = event.target.files[0]
        const storageRef = firebase.storage().ref(`equipoliber/${file.name}`)
        const task = storageRef.put(file)

        task.on('state_changed', (snapshot) => {
            let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            this.setState({
                uploadValue: percentage
            })
        }, (error) => {
            console.error(error.message)
        }, () => {
            // Upload complete
            this.setState({
                picture: task.snapshot.downloadURL
            })
        })
    }

    render () {
        return (
            <div>
                <progress value={this.state.uploadValue} max='100'>
                    {this.state.uploadValue} %
                </progress>
                <br />
                <input type='file' onChange={this.handleOnChange.bind(this)}/>
                <br />
                <img width='90' src={this.state.picture} />
            </div>
        )
    }
}

export default FileUpload;

