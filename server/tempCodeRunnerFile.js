
app.use(cors());
 app.use(errorHandler);
app.listen(port,()=>{
  console.log(`server running at http://localhost:${port}/`)
})