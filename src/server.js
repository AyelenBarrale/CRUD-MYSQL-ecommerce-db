import "./db.js";
import emoji from 'node-emoji'
import {app} from './app.js'

app.listen(8080, () => {
    console.log(emoji.get('computer'), 'Server started on port 8080')
})