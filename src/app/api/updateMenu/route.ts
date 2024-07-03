
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

export async function POST(req: NextRequest) {
  const { newContent } = await req.json();

  if (!newContent) {
    return NextResponse.json({ error: 'newContent is required' }, { status: 400 });
  }

  try {
    await octokit.gists.update({
      gist_id: GIST_ID as string,
      files: {
        menu: {
          content: newContent,
        },
      },
    });

    return NextResponse.json({ message: 'Gist updated successfully.' });
  } catch (error) {
    console.error("Error updating Gist:", error);
    return NextResponse.json({ error: 'Error updating menu data' }, { status: 500 });
  }
}