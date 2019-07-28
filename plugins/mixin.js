import Vue from 'vue'

Vue.mixin({
  methods: {
    isNumber(sNumber) {
      const number = /^\d+$/
      return number.test(sNumber)
    },
    isValid(sInvalid) {
      if (!sInvalid) {
        return false
      } else {
        return true
      }
    },
    isObject(sObject) {
      if (typeof sObject === 'object') {
        return true
      } else {
        return false
      }
    },
    isNonEmptyObject(sObject) {
      if (typeof sObject === 'object' && Object.keys(sObject).length > 0) {
        return true
      } else {
        return false
      }
    },
    isNonEmptyArray(sArray) {
      if (Array.isArray(sArray) && sArray.length > 0) {
        return true
      } else {
        return false
      }
    },
    isEmptyString(sString) {
      if (!sString) {
        return true
      } else {
        return false
      }
    },
    deepCopy(value) {
      const deepDataToString = JSON.stringify(value)
      const deepData = JSON.parse(deepDataToString)
      return deepData
    },
    isBase64(sString) {
      try {
        return btoa(atob(sString)) === sString
      } catch (err) {
        return false
      }
    },
    stringToBase64(sString) {
      return window.btoa(sString)
    },
    base64ToString(sBase64) {
      return window.atob(sBase64)
    },
    consoleLogError(value) {
      console.log(`%c${value}`, 'color:crimson;font-size:12px;')
    }
  }
})
