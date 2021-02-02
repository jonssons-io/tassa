import axios from "axios";
import store from "./../store/index.js";

const BASE_URL = "/api/v1";

// TODO: Flytta token osv till annan storage
function getAuthHeader() {
	let token = store.state.currentUser.authtoken;
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

function deleteReq(path, data) {
	return axios.delete(`${BASE_URL}${path}`, data, getAuthHeader());
}

// Request for user login.
function userAuth(loginform) {
	return postReq("/auth/login", loginform);
}

// User requests
function getUser(id) {
	return getReq(`/account/${id}`);
}

function createUser(userInfo) {
	return postReq(`/account`, userInfo);
}

// Dog requests
function createDog(dogInfo) {
	return postReq(`/dog`, dogInfo);
}

export default {
	putReq,
	deleteReq,
	userAuth,
	getUser,
	createUser,
	createDog
};
