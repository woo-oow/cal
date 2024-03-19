let nums1 = []
let nums2 = []

var num1 = document.getElementById("num1")
var num2 = document.getElementById("num2")

var op = document.getElementById("op")
function saven(n) {
  nums1.push(n)
}
function add() {
  if (nums1 > 2) { return nums1[nums1.length() - 1] + nums2[nums2.length() - 2] }
}
function sub() {
  if (nums1 > 2) { return nums1[nums1.length() - 1] - nums2[nums2.length() - 2] }
}
function mul() {
  if (nums1 > 2) { return nums1[nums1.length() - 1] * nums2[nums2.length() - 2] }
}
function div() {
  if (nums1 > 2) { return nums1[nums1.length() - 1] / nums2[nums2.length() - 2] }
}
function square() {
  if (nums1 > 2) { return nums1[nums1.length() - 1] * nums2[nums1.length() - 1] }
}
