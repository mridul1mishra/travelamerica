import NavigationHeader from "@/app/components/Header/NavigationHeader";
export default function Header(props: React.ComponentProps<typeof NavigationHeader>) { return <NavigationHeader {...props} fixed={false} />; }
