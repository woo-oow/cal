let nums = []
function saven(n) {
  nums.push(n)
}
function add() {
  if (nums > 2) { return nums[nums.length() - 1] + nums[nums.length() - 2] }
}
function sub() {
  if (nums > 2) { return nums[nums.length() - 1] - nums[nums.length() - 2] }
}
function mul() {
  if (nums > 2) { return nums[nums.length() - 1] * nums[nums.length() - 2] }
}
function div() {
  if (nums > 2) { return nums[nums.length() - 1] / nums[nums.length() - 2] }
}
function square() {
  if (nums > 2) { return nums[nums.length() - 1] * nums[nums.length() - 1] }
}
