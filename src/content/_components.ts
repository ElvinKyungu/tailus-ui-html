import { List, Text, Code, Kbd, Link } from "@components/typography"
import * as Typography from "@components/utilities/Typography"
import CustomImage from "@components/utilities/TemplateImage"

export const components = {
    code: Code, 
    a:Link, 
    ul:List, 
    h1:Typography.HeadingOne, 
    h2:Typography.HeadingTwo, 
    h3:Typography.HeadingThree,
    h4:Typography.HeadingFour,
    h5:Typography.HeadingFive,
    h6:Typography.HeadingSix,
    p: Text,
    kbd: Kbd,
    img : CustomImage
}

export default components