import * as AWS from 'aws-sdk'

const docClient = new AWS.DynamoDB.DocumentClient()

export const fetchData = (tableName) => {
    var params = {
        TableName: tableName
    }

    docClient.scan(params, function (err, data) {
        if (!err) {
            console.log(data)
        }
    })
}

export const putData = (tableName, nm, desc, data, img) => {
    var params = {
        TableName: 'newen_app',
        Item: {
            name: nm,
            description: desc,
            meaning: data,
            image: img
          }
    }
    
    docClient.put(params, function (err, data) {
        if (err) {
            console.log('Error', err)
        } else {
            console.log('Success', data)
        }
    })
}