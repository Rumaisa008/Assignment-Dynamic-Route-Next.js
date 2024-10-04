export default function RootLayout({
    children,
}: Readonly<{
    children:React.ReactNode;
}>) {
    return(
        <body className="bg-green-100">
            {children}
        </body>
    )
}