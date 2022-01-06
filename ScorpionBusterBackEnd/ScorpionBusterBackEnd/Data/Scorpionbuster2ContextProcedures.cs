﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using ScorpionBusterBackEnd.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading;
using System.Threading.Tasks;

namespace ScorpionBusterBackEnd.Data
{
    public partial class Scorpionbuster2Context
    {
        private Scorpionbuster2ContextProcedures _procedures;

        public virtual Scorpionbuster2ContextProcedures Procedures
        {
            get
            {
                if (_procedures is null) _procedures = new Scorpionbuster2ContextProcedures(this);
                return _procedures;
            }
            set
            {
                _procedures = value;
            }
        }

        public Scorpionbuster2ContextProcedures GetProcedures()
        {
            return Procedures;
        }
    }

    public partial class Scorpionbuster2ContextProcedures
    {
        private readonly Scorpionbuster2Context _context;

        public Scorpionbuster2ContextProcedures(Scorpionbuster2Context context)
        {
            _context = context;
        }

        public virtual async Task<List<GetConsomableResult>> GetConsomableAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<GetConsomableResult>("EXEC @returnValue = [dbo].[GetConsomable]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<GetEquippedEquipmentResult>> GetEquippedEquipmentAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<GetEquippedEquipmentResult>("EXEC @returnValue = [dbo].[GetEquippedEquipment]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<GetInventoryResult>> GetInventoryAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<GetInventoryResult>("EXEC @returnValue = [dbo].[GetInventory]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<GetOwnedEquipementResult>> GetOwnedEquipementAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<GetOwnedEquipementResult>("EXEC @returnValue = [dbo].[GetOwnedEquipement]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<GetShopResult>> GetShopAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<GetShopResult>("EXEC @returnValue = [dbo].[GetShop]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<GetUnequipedEquipmentResult>> GetUnequipedEquipmentAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<GetUnequipedEquipmentResult>("EXEC @returnValue = [dbo].[GetUnequipedEquipment]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }
    }
}