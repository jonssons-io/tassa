import axios from "axios";
import CookieHandler from "./CookieHandler.js";

const BASE_URL = "/api/v1";

// TODO: Flytta token osv till annan storage
function getAuthHeader() {
	let token = CookieHandler.getCookie("authtoken");
	if (token != "") {
		return {
			headers: {
				Authorization: `Bearer ${token}`
			}
		};
	}
}

// GET, POST, PUT, DELETE - CALL FUNCTIONS
function postReq(path, data) {
	return axios.post(`${BASE_URL}${path}`, data, getAuthHeader());
}

function getReq(path) {
	return axios.get(`${BASE_URL}${path}`, getAuthHeader());
}

function putReq(path, data) {
	return axios.put(`${BASE_URL}${path}`, data, getAuthHeader());
}

function deleteReq(path) {
	return axios.delete(`${BASE_URL}${path}`, getAuthHeader());
}

// Request for user login.
function userAuth(loginform) {
	return postReq("/auth/login", loginform).then(res => {
		let today = Date.now() / 1000;
		let validUntil = res.data.result.token.exp_epoch;
		let maxage = validUntil - today;
		CookieHandler.setCookie("authstatus", true, maxage);
		CookieHandler.setCookie(
			"authtoken",
			res.data.result.token.token,
			maxage
		);
		CookieHandler.setCookie("userid", res.data.result.user._id, maxage);
		return res;
	});
}

// User requests
function getUser(id) {
	return getReq(`/account/${id}`);
}
function getUsers() {
	return getReq(`/account`);
}
function createUser(userInfo) {
	return postReq(`/account`, userInfo);
}

// Dog requests
function createDog(dogInfo) {
	return postReq(`/dog`, dogInfo);
}
function getDogs(id) {
	return getReq(`/dog/${id}`);
}
function deleteDog(dogId) {
	return deleteReq(`/dog/${dogId}`);
}
// Edit preference
function getPrefe(userId) {
	return getReq(`/preference/${userId}`);
}
function updatePrefe(userId, preferenceForm) {
	return putReq(`/preference/${userId}`, preferenceForm);
}
// Edit personal
function getPerson(userId) {
	return getReq(`/account/${userId}`);
}
function updatePerson(userId, editForm) {
	return putReq(`/account/${userId}`, editForm);
}
function deletePerson(userId) {
	return deleteReq(`/account/${userId}`);
}
function getAreas() {
	return getReq(`/area/kommun`);
}
export default {
	putReq,
	deleteReq,
	userAuth,
	getUser,
	getUsers,
	createUser,
	createDog,
	deleteDog,
	getDogs,
	getPrefe,
	updatePrefe,
	getPerson,
	updatePerson,
	deletePerson,
	getAreas
};
