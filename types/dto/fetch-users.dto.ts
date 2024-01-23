import {SortOrder} from "mongoose";

export interface IDTOFetchUsers {
	userId: string;
	searchString?: string;
	pageNumber?: number;
	pageSize?: number;
	sortBy?: SortOrder;
}