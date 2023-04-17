| | | |
|---------------|-----------|------------------------------------------------------------------------------|
| **State**     | data()    | state atau statement, tempat kita menyimpan sebuah value seperti variable.
|               |           | akan reset setiap terjadi refresh/pertama kali dibuka                        |
| **Methods**   | methods   | function yang kita declare sendiri, melakukan sebuah proses. 
|               |           | dapat digunakan untuk hit server.                                            |
| **Lifecycle** | created() | dapat digunakan untuk fetch data dan cek localstorage                        |
| **Lifecycle** | mounted() | mount to DOM -> dipasangkan ke DOM, implementasinya seperti refs.            |
| **Lifecycle** | updated() | berjalan setiap kali ada update pada state                                   |
| **Watchers**  | watch     | berjalan setiap kali ada update pada specific state                          |
| **Computed**  | computed  | seperti getter terhadap value state, memungkinkan proses yang complex. 
|               |           | Tidak sama dengan method, bukan untuk panggil axios.                         |
| | | |

```
Vue Directive
v-if
v-else-if
v-else
v-for
v-model
etc..
```