const getPosts = async () => {
    const posts = document.querySelectorAll<HTMLDivElement>('._post');
    // for (const post of posts) {
    //     post.parentElement?.removeChild(post);
    // }
    const result = await evaluatePost(posts[0]);
}

const extractText = async (link : string) : Promise<string> => {
    // const text = await Tesseract.recognize(link, 'rus');
    // console.log(text.data);
    return '';
}

const evaluatePost = async (post: HTMLDivElement) : Promise<boolean> => {
    const postText : string = post.querySelector('.wall_post_text')?.textContent || '';
    const postImages = post.querySelectorAll<HTMLLinkElement>("a[aria-label='фотография']");
    const links : string[] = Array.from(postImages).map(image => {
        const cssLink = image.style.backgroundImage;
        return cssLink.slice(5, -3);
    });
    const texts = links.map(extractText);
    console.log(texts);
    return true;
}

getPosts();