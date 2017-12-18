class LocalStorage {
    constructor(key, updatedCallback = null) {
        this.key = key;

        window.addEventListener('change', this.checkLocalStorageUpdate.bind(this));
    }
    setKey(key) {
        this.key = key
    }
    getKey() {
        this.key
    }
    
    checkKey() {
        return window.localStorage.getItem(this.key) !== null;
    }
    getData(data) {
        try {
            return JSON.parse(localStorage.getItem(this.key)) || [];
        } catch (e) {
            return [];
        }
    }
    saveData(data) {
        localStorage.setItem(this.key, JSON.stringify(data));
    }

    checkLocalStorageUpdate(e) {
        if (e.key === this.key) {
            updatedCallback();
        }
    }

}

export default LocalStorage;
