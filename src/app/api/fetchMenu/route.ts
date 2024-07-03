import { Octokit } from "@octokit/rest";
import { NextRequest, NextResponse } from 'next/server';

const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
const GIST_ID = process.env.GIST_ID;

if (!GITHUB_TOKEN || !GIST_ID) {
  throw new Error("GITHUB_TOKEN and GIST_ID must be provided");
}

const octokit = new Octokit({
  auth: GITHUB_TOKEN as string,
});

export async function GET(req: NextRequest) {
  try {
    const response = await octokit.gists.get({
      gist_id: GIST_ID as string,
    });

    const gist = response.data;

    const menuFile = gist.files?.["menu"];

    if (!menuFile || !menuFile.content || typeof menuFile.content !== "string") {
      return NextResponse.json({ error: 'Invalid content in the Gist.' }, { status: 404 });
    }

    const menuContent = JSON.parse(menuFile.content);

    return NextResponse.json(menuContent);
  } catch (error) {
    console.error("Error fetching Gist:", error);
    return NextResponse.json({ error: 'Error fetching menu data' }, { status: 500 });
  }
}
