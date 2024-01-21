"use server";

import {connectToDB} from "@/lib/mongoose";
import {revalidatePath} from "next/cache";

import User from "@/lib/models/user.model";
import Thread from "@/lib/models/thread.model";

interface Params {
	text: string,
	author: string,
	communityId: string | null,
	path: string,
}

export async function createThread({text, author, communityId, path}: Params
) {
	try {
		await connectToDB();
		
		const createdThread = await Thread.create({
			text,
			author,
			community: null, // Assign communityId if provided, or leave it null for personal account
		});
		
		await User.findByIdAndUpdate(author, {
			$push: {threads: createdThread._id},
		});

		revalidatePath(path);
	} catch (error: any) {
		throw new Error(`Failed to create thread: ${error.message}`);
	}
}