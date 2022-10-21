/**
 * @name localstorage
 * @description Données persistantes dans le navigateur
 * @author GabrielG
 * @version 1.0
 **/


export default{
    save(key, value){
        localStorage.setItem(key, JSON.stringify(value));
    },
    load(key) {
        const value = localStorage.getItem(key);
        if(value != null){
            //recovertir le string json en valeurs javascript
            return JSON.parse(value);
        }

        return null;
    },
    delete() {},
};