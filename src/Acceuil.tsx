import './index.css'

export default function Acceuil() {
  return (
    <>
      <div className='flex w-full h-screen justify-between font-inter overflow-hidden'>
        {/* Première colonne */}
        <div className='w-1/3 flex items-center justify-center flex-col bg-[#00539C0A] p-14 h-full'>
          <div className='flex items-center justify-center mb-8'>
            <img src="./src/assets/WorkFacto.png" alt="worketyamoFactory" className='w-[6rem] h-[6rem]' />
          </div>
          <div className='flex flex-col items-center justify-between h-full w-full'>
            <div className='flex flex-col h-full items-center gap-10 w-full'>
              <div className='flex-row flex w-full gap-4'>
                <img src="./src/assets/person.png" className='flex' />
                <div>
                  <h6 className='font-extrabold text-black'>Inscription</h6>
                  Entrez vos informations personnelles.
                </div>
              </div>

              <div className='flex-row flex w-full gap-4'>
                <div className="relative flex items-center justify-center">
                  <img src="./src/assets/Rectangle 1.png" alt="rectangle" className="block" />
                  <img src="./src/assets/mail.png" alt="mail" className="absolute" />
                </div>
                <p className='flex'>
                  Validation OTP <br />
                  Confirmez votre adresse e-mail.
                </p>
              </div>

              <div className='flex-row flex w-full gap-4'>
                <div className="relative flex items-center justify-center">
                  <img src="./src/assets/Rectangle 1.png" alt="rectangle" className="block" />
                  <img src="./src/assets/add-team-stroke-rounded 1.png" alt="add team" className="absolute" />
                </div>
                <p>
                  Invitez vos amis <br />
                  Envoyez des invitations à vos amis.
                </p>
              </div>

              <div className='flex-row flex w-full gap-4'>
                <div className="relative flex items-center justify-center">
                  <img src="./src/assets/Rectangle 1.png" alt="rectangle" className="block" />
                  <img src="./src/assets/rocket-stroke-rounded 1.png" alt="rocket" className="absolute" />
                </div>
                <p>
                  Bienvenu à Worketyamo <br />
                  Votre inscription est terminée.
                </p>
              </div>
            </div>

            {/* Dernier enfant, placé en bas */}
            <div className='flex flex-row justify-between items-center text-[#00539C] w-full mt-auto'>
              <div className='flex flex-row gap-4'>
                <img src="./src/assets/arrow-left-02-stroke-rounded 1.png" alt="arrow" />
                <button>Vos détails</button>
              </div>
              <button>SignIn</button>
            </div>
          </div>
        </div>

        {/* Deuxième colonne */}
        <div className='w-2/3 px-[14rem] flex flex-col justify-center items-center h-full'>
          <div className='bg-white flex flex-col p-[2rem]'>
            <div>
              <img src="./src/assets/worketyamo.png" />
            </div>
          </div>

          <div className='flex-col flex items-center w-full mt-6'>
            <h1 className='text-black font-extrabold text-4xl'>Connexion</h1>
            <h6>Rentrez vos infos pour vous connecter.</h6>
            <form className='w-[60%] flex my-6 gap-4 flex-col'>
              <div className='flex flex-col gap-2 w-full'>
                <p className='text-black text-[.9rem] font-bold'>Email</p>
                <input type="email" placeholder='abc@example.com' className='rounded border bg-[#F4F4F580] p-2 w-full'/>
              </div>

              <div className='flex flex-col gap-2 w-full'>
                <p className='text-black text-[.9rem] font-bold'>Mot de passe</p>
                <input type="password" placeholder='**************' className='rounded border bg-[#F4F4F580] p-2 w-full'/>
              </div>

              <div className="flex items-center gap-x-1">
                <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden rounded bg-[#FF0808]" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden rounded bg-[#D9D9D9]" role="progressbar"></div>
                <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden rounded bg-[#D9D9D9]" role="progressbar"></div>
                <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden rounded bg-[#D9D9D9]" role="progressbar"></div>
              </div>

              <div className="flex items-center w-full my-4">
                <div className="flex-grow border-t border-[#D9D9D9]"></div>
                <h6 className="px-4 text-[#D9D9D9]">OU AVEC</h6>
                <div className="flex-grow border-t border-[#D9D9D9]"></div>
              </div>

              <div className='flex flex-col items-center w-full gap-4'>
                <button className='flex items-center justify-center gap-2 font-bold text-black w-full h-10 rounded drop-shadow border'>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    {/* SVG pour Github */}
                  </svg>
                  Github
                </button>

                <button className='flex items-center justify-center gap-2 font-bold text-black w-full h-10 rounded drop-shadow border'>
                  <img src="./src/assets/google.png" alt="" />
                  Google
                </button>

                <button className='text-[#FAFAFA] flex justify-center items-center w-full h-9 mt-4 border bg-[#00539C] rounded-md' type='submit'>Créer le compte</button>

                <p>By clicking continue, you agree to our <br />
                  <a href="#" className='hover:text-[#00539C]'><u>Terms of Service</u></a> and <a href="#" className='hover:text-[#00539C]'><u>Privacy Policy</u></a>.
                </p>
              </div>

              <div className='w-full mt-8'>
                <div className="flex items-center gap-x-1">
                  <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden rounded bg-[#FF0808]" role="progressbar"></div>
                  <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden rounded bg-[#D9D9D9]" role="progressbar"></div>
                  <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden rounded bg-[#D9D9D9]" role="progressbar"></div>
                  <div className="w-full h-2.5 flex flex-col justify-center overflow-hidden rounded bg-[#D9D9D9]" role="progressbar"></div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

