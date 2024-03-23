let nums1 = []
let nums2 = []

var distring1 = ""
var distring2 = ""

var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")

let debug = num1

var op = document.getElementById("op")

function saven(n) {
  nums1.push(n)
  alert(distring)
}
function add() {
  if (nums1 > 2) { 
    return nums1[nums1.length() - 1] + nums2[nums2.length() - 2]
  }
}
function subtract() {
  if (nums1 > 2) { 
    return nums1[nums1.length() - 1] - nums2[nums2.length() - 2] 
  }
}
function multiply() {
  if (nums1 > 2) { 
    return nums1[nums1.length() - 1] * nums2[nums2.length() - 2] 
  }
}
function divide() {
  if (nums1 > 2) { 
    return nums1[nums1.length() - 1] / nums2[nums2.length() - 2] 
  }
}
function square() {
  if (nums1 > 2) { 
    return nums1[nums1.length() - 1] * nums2[nums1.length() - 1] 
  }
}
function clear() {
  let nums1 = []
  let nums2 = []
}
nums1.forEach((i) => {
  distring1 = distring1 + i
});
nums2.forEach((i) => {
  distring2 = distring2 + i
});

num1.innerHTML += distring1

if (num1 !== debug) { alert(num1)}

num2.innerHTML += distring2
